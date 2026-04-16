import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./FormCreateSet.css";

export function FormCreateSet() {
  const [count, setCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (count > 0) {
      alert(`Форма отправлена ${count} раз(а)`);
    }
    console.log("count изменился:", count);
  }, [count]);

  const onSubmit = (data) => {
    console.log("Данные формы:", data);
    setCount(count + 1);
    reset();
  };

  return (
    <div className="form-container">
      <h3>Создание сета</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Название сета</label>
          <input
            {...register("name", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 4,
                message: "Минимум 4 символа",
              },
            })}
            placeholder="Введите название"
          />
          {errors.name && (
            <span className="error-msg">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Описание</label>
          <textarea
            {...register("description", {
              required: "Поле обязательно для заполнения",
            })}
            placeholder="Введите описание"
          />
          {errors.description && (
            <span className="error-msg">{errors.description.message}</span>
          )}
        </div>

        <button type="submit">Создать сет</button>
      </form>
    </div>
  );
}