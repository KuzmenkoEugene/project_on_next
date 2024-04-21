"use client";

import { useStore } from "../../store/store";
import { useForm } from "react-hook-form";
import { getСurrencies } from "@/actions/currency";
import Image from "next/image";
import Inputs from "../Inputs/Inputs";
import InputDate from "../InputDate/InputDate";
import Button from "../Button/Button";
import arrows_icon from "../../assets/icons/arrows.svg";
import { formatDate } from "@/utils/formatDate";
import React, { useState, useEffect } from "react";

type FormValues = {
  dateValue: string;
  valueTo: string;
  valueFrom: string;
  currencyTo: string;
  currencyFrom: string;
};

const Conversion: React.FC = () => {
  const [currencyData, setCurrencyData] = useState<{ cc: string; rate: number; }[]>([]);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const currentDate = new Date().toISOString().slice(0, 10);

  const cards = useStore(state => state.cards)
  const add = useStore(state => state.addCard)
  
  const { register, setValue, control, watch } =
    useForm<FormValues>({
      defaultValues: {
        dateValue: currentDate,
        valueFrom: '',
        valueTo: '',
        currencyFrom: "USD",
        currencyTo: "PLN",
      },
    });

  const watchedDateValue = watch("dateValue");
  const watchedValueTo = watch("valueTo");
  const watchedValueFrom = watch("valueFrom");
  const watchedCurrencyFrom = watch("currencyFrom");
  const watchedCurrencyTo = watch("currencyTo");

  useEffect(() => {
    getСurrencies(formatDate(watchedDateValue)).then((data) => {
      setCurrencyData(data);
    });
  }, [watchedDateValue]);

  useEffect(() => {
    const currencyCodes: string[] = currencyData.map((el: any) => el.cc);
    setCurrencies(currencyCodes);
  }, [currencyData]);

  useEffect(() => {
    const fromRate = currencyData.find(
      (currency) => currency.cc === watchedCurrencyFrom
    )?.rate;
    const toRate = currencyData.find(
      (currency) => currency.cc === watchedCurrencyTo
    )?.rate;

    if (fromRate && toRate && !isNaN(+watchedValueFrom)) {
      let result = +watchedValueFrom * (fromRate / toRate)
      setValue("valueTo", result.toFixed(4));
    }

  }, [watchedValueFrom, watchedCurrencyFrom, watchedCurrencyTo, watchedDateValue]);

  const saveResultClick = () => {
    add(watchedDateValue, `${watchedValueFrom} ${watchedCurrencyFrom}`, `${watchedValueTo} ${watchedCurrencyTo}`)
  };
  

  return (
    <div className="flex justify-center items-center w-[1366px] h-[557px] shrink-0 bg-[#F6F7FF]">
      <div className="flex flex-col w-[962px] pt-[53px] pb-[55px] pl-[65px] pr-[65px] bg-[#FFF] rounded-[4px]">
        <h2 className="text-[#1F1E25] text-[40px] font-bold not-italic leading-10 mb-[70px]">
          Конвертер валют
        </h2>
        <div className="flex justify-items-center justify-between">
          <div className="flex flex-col gap-[20px]">
            <Inputs
              label={"В мене є"}
              options={currencies}
              name="valueFrom"
              nameSelect="currencyFrom"
              control={control}
            />
            <InputDate register={register} />
          </div>
          <Image
            className="w-[22px] h-[22px] mt-[73px]"
            src={arrows_icon}
            alt="arrows"
          ></Image>
          <div className="flex flex-col items-end gap-[24px]">
            <Inputs
              label={"Хочу придбати"}
              options={currencies}
              name="valueTo"
              nameSelect="currencyTo"
              control={control}
            />
            <div>
              <Button
                text="Зберегти результат"
                additionalStyles="w-[220px] h-[60px] text-[#F6F7FF] bg-[#2C36F2] text-[18px] leading-6"
                onClick={saveResultClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;

