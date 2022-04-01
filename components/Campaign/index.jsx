import { useState, useEffect } from "react";
import Image from "next/image";
import IconClock from "../../assets/icons/clock.svg";
import * as C from "./style";

export default function Campaing() {
  const [day, setDay] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    let today = new Date();
    let tempDate = today.setDate(today.getDate() + 13);
    tempDate = new Date(tempDate);
    let tempDateISO = tempDate.toISOString().split("T")[0];
    let tempHoursISO = tempDate.toISOString().split("T")[1];

    const [, , day] = tempDateISO.split("-");
    const [hours, minutes, second] = tempHoursISO.split(":");

    setDay(day);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(second.split(".")[0]);
    handleTimer(second.split(".")[0]);
  }, []);

  function handleTimer(sec) {
    let s = sec;
    setInterval(() => {
      if (s > 0) {
        s -= 1;
      } else {
        s = 59;
        handleMinutes();
      }
      setSeconds(s);
    }, 1000);
  }

  const handleMinutes = () => {
    if (minutes === 0) {
      setMinutes(59);
      handleHours();
      return;
    }
    setMinutes((prevState) => prevState - 1);
  };
  const handleHours = () => {
    if (hours === 0) {
      setHours(24);
      return;
    }
    setMinutes((prevState) => prevState - 1);
  };

  return (
    <C.Campaing>
      <C.Title>BLACK FRIDAY</C.Title>
      <C.Info>
        <C.Warning>A PROMOÇÃO TERMINA EM:</C.Warning>
        <Image width={"12px"} src={IconClock} alt='Icone relogio campanha' />
        <C.Title>{`${day}D${hours}:${minutes}:${seconds}`}</C.Title>
      </C.Info>
    </C.Campaing>
  );
}
