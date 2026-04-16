import { useForm } from "react-hook-form";
import "./FormCreateSet.css";

export function FormCreateCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      front: "",
      back: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Карточка:", data);
    reset();
  };

  return (
    <div className="form-container">
      <h3>Создание карточки</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Лицевая сторона</label>
          <input
            {...register("front", {
              required: "Поле обязательно для заполнения",
            })}
            placeholder="Например: apple"
          />
          {errors.front && (
            <span className="error-msg">{errors.front.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Обратная сторона</label>
          <input
            {...register("back", {
              required: "Поле обязательно для заполнения",
            })}
            placeholder="Например: яблоко"
          />
          {errors.back && (
            <span className="error-msg">{errors.back.message}</span>
          )}
        </div>

        <button type="submit">Добавить карточку</button>
      </form>
    </div>
  );
}