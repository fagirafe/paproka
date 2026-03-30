"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  telegram: string;
  description: string;
};

export default function Partners() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Partners form submitted:", data);
    alert("Данные успешно отправлены!");
  };

  return (
    <section className="px-4 container mx-auto py-24" id="partners">
      <div className="bg-foreground text-background rounded-3xl p-12 md:p-24 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Партнёрам</h2>
          <p className="text-xl text-background/80 mb-8">
            Если вы хотите стать нашим партнером или у вас есть интересное предложение
          </p>
        </div>
        <div className="flex-1 w-full max-w-md">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <input 
                {...register("name", { required: true })} 
                placeholder="Имя" 
                className="w-full bg-background/10 border border-background/20 rounded-md p-4 text-background placeholder:text-background/50 focus:outline-none focus:border-background"
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">Обязательное поле</span>}
            </div>
            <div>
              <input 
                {...register("telegram", { required: true })} 
                placeholder="Telegram (@username)" 
                className="w-full bg-background/10 border border-background/20 rounded-md p-4 text-background placeholder:text-background/50 focus:outline-none focus:border-background"
              />
              {errors.telegram && <span className="text-red-500 text-sm mt-1">Обязательное поле</span>}
            </div>
            <div>
              <textarea 
                {...register("description")} 
                placeholder="Коротко о предложении" 
                rows={4}
                className="w-full bg-background/10 border border-background/20 rounded-md p-4 text-background placeholder:text-background/50 focus:outline-none focus:border-background"
              />
            </div>
            <button type="submit" className="w-full bg-background text-foreground font-bold py-4 rounded-md hover:bg-background/90 transition-colors">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
