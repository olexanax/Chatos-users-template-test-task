import { useState, useEffect, useCallback } from "react";
import { useHttp } from "hooks/useHttp";
import { useForm, SubmitHandler } from "react-hook-form";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormProps, Inputs } from "interfaces";
import { default as StyledForm } from "components/Form/styles";
const { v4: uuidv4 } = require("uuid");

const schema = Yup.object().shape({
    name: Yup.string().required("Required"),
    mail: Yup.string().email("Not a valid email").required("Required"),
    age: Yup.number().min(1, "bigger then 0").integer().required("Required"),
});

const Form: React.FC<FormProps<"create" | "update">> = ({
    type,
    userInfo,
    setUpdateMode,
    setUsersData,
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const { request } = useHttp();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
        defaultValues:
            type === "update"
                ? {
                      name: userInfo?.name,
                      age: userInfo?.age,
                      mail: userInfo?.mail,
                  }
                : undefined,
    });

    useEffect(() => {
        if (error) {
            alert("Помилка завантаження даних, спробуйте пізніше");
            setUpdateMode!(false);
            setError(false);
        }
        // eslint-disable-next-line
    }, [error]);

    const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
        if (type === "update") {
            setLoading(true);
            const newUser = {
                ...data,
                id: userInfo!.id,
                dateOfAddition: userInfo!.dateOfAddition,
            };
            request(
                `http://localhost:3001/users/${userInfo!.id}`,
                "PUT",
                JSON.stringify(newUser)
            )
                .then(() => {
                    setUsersData!((state) => [
                        ...state.filter((user) => user.id !== userInfo!.id),
                        newUser,
                    ]);
                    setUpdateMode!(false);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                    setError(true);
                });
        } else if (type === "create") {
            setLoading(true);
            const newUser = {
                ...data,
                id: uuidv4(),
                dateOfAddition: new Date(),
            };
            request(
                "http://localhost:3001/users",
                "POST",
                JSON.stringify(newUser)
            )
                .then(() => {
                    setUsersData!((state) => [...state, newUser]);
                    reset();
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                    setError(true);
                });
        }
        // eslint-disable-next-line
    }, []);
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div className="name_input">
                <label htmlFor="name">Імʼя</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Імʼя"
                    {...register("name", { required: true })}
                />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="age_input">
                <label htmlFor="age">Вік</label>
                <input
                    id="age"
                    type="number"
                    placeholder="Вік"
                    {...register("age", { required: true })}
                />
                {errors.age && <span>{errors.age.message}</span>}
            </div>
            <div className="mail_input">
                <label htmlFor="mail">Пошта</label>
                <input
                    id="mail"
                    type="text"
                    placeholder="Пошта"
                    {...register("mail", { required: true })}
                />
                {errors.mail && <span>{errors.mail.message}</span>}
            </div>
            <button disabled={loading} className="change_button" type="submit">
                {loading ? "loading..." : "готово"}
            </button>
        </StyledForm>
    );
};

export default Form;
