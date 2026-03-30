"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  telegram: string;
  portfolio: string;
};

export default function Career() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Career form submitted:", data);
    alert("Отклик отправлен!");
  };

  return (
    <section className="px-4 container mx-auto py-24" id="career">
      <div className="border border-foreground/10 bg-foreground/5 rounded-3xl p-12 md:p-24 flex flex-col md:flex-row gap-12 items-center">
         <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Карьера</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Мы всегда в поиске талантливых ребят. Присылай портфолио, если чувствуешь, что нам по пути.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
             <div>
              <input 
                {...register("name", { required: true })} 
                placeholder="Имя" 
                className="w-full bg-background border border-foreground/20 rounded-md p-4 focus:outline-none focus:border-foreground"
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">Обязательное поле</span>}
            </div>
            <div>
              <input 
                {...register("telegram", { required: true })} 
                placeholder="Telegram (@username)" 
                className="w-full bg-background border border-foreground/20 rounded-md p-4 focus:outline-none focus:border-foreground"
              />
              {errors.telegram && <span className="text-red-500 text-sm mt-1">Обязательное поле</span>}
            </div>
             <div>
              <input 
                {...register("portfolio", { required: true })} 
                placeholder="Ссылка на портфолио" 
                className="w-full bg-background border border-foreground/20 rounded-md p-4 focus:outline-none focus:border-foreground"
              />
              {errors.portfolio && <span className="text-red-500 text-sm mt-1">Обязательное поле</span>}
            </div>
            <button type="submit" className="w-full bg-foreground text-background font-bold py-4 rounded-md hover:bg-foreground/90 transition-colors">
              Отправить портфолио
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
