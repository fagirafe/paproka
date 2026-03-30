"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  telegram: string;
  description: string;
};

export default function Contacts() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Contact form submitted:", data);
    alert("Сообщение отправлено!");
  };

  return (
    <section className="px-4 container mx-auto py-24 border-t border-foreground/10" id="contacts">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Заказать или просто спросить можно в telegram</h2>
          <div className="flex gap-4 mt-8">
             <a href="#" className="px-8 py-4 bg-foreground border border-foreground text-background font-bold rounded-md hover:bg-background hover:text-foreground transition-all">
                Написать в TG
             </a>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-8">Или заполните форму</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
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
              <textarea 
                {...register("description")} 
                placeholder="О проекте" 
                rows={4}
                className="w-full bg-background border border-foreground/20 rounded-md p-4 focus:outline-none focus:border-foreground"
              />
            </div>
            <button type="submit" className="w-full bg-foreground text-background font-bold py-4 rounded-md hover:bg-foreground/90 transition-colors">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
