import Image from "next/image";
import Card from "../Offer/Card";
import ArrowPrevious from "../../assets/icons/arrow-previous.svg";
import ArrowNext from "../../assets/icons/arrow-next.svg";

import * as C from "./style";
import { useRef } from "react";

export default function Carrossel() {
  const ofertas = [
    {
      id: 1,
      nome: "Produto 1",
      preco: 1,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 1,
          nome: "label 1",
        },
      ],
    },
    {
      id: 2,
      nome: "Produto 2",
      preco: 2,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 2,
          nome: "label 2",
        },
      ],
    },
    {
      id: 3,
      nome: "Produto 3",
      preco: 3,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 3,
          nome: "label 3",
        },
      ],
    },
    {
      id: 4,
      nome: "Produto 4",
      preco: 4,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 4,
          nome: "label 4",
        },
      ],
    },
    {
      id: 5,
      nome: "Produto 5",
      preco: 5,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 5,
          nome: "label 5",
        },
      ],
    },
    {
      id: 6,
      nome: "Produto 6",
      preco: 6,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 6,
          nome: "label 6",
        },
      ],
    },
    {
      id: 7,
      nome: "Produto 7",
      preco: 7,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 7,
          nome: "label 7",
        },
      ],
    },
    {
      id: 8,
      nome: "Produto 8",
      preco: 8,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 8,
          nome: "label 8",
        },
      ],
    },
    {
      id: 9,
      nome: "Produto 9",
      preco: 9,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 9,
          nome: "label 9",
        },
      ],
    },
    {
      id: 10,
      nome: "Produto 10",
      preco: 10,
      imagem: "Imagemmmmm",
      labels: [
        {
          id: 10,
          nome: "label 10",
        },
      ],
    },
  ];

  const carroselRef = useRef(null);

  const handleLeft = (e) => {
    e.preventDefault();
    const { current } = carroselRef;
    current.scrollLeft -= 220;
  };
  const handleRight = (e) => {
    e.preventDefault();
    const { current } = carroselRef;
    current.scrollLeft = current.scrollLeft + 220;
  };

  return (
    <C.Teste>
      <C.Div ref={carroselRef}>
        {ofertas.map((oferta) => (
          <Card key={oferta.id} oferta={oferta} />
        ))}
      </C.Div>
      <C.Teste2>
        <C.ArrowPrevious onClick={handleLeft}>
          <Image src={ArrowPrevious} alt='arrow-previous' />
        </C.ArrowPrevious>
        <C.ArrowNext onClick={handleRight}>
          <Image src={ArrowNext} alt='arrow-next' />
        </C.ArrowNext>
      </C.Teste2>
    </C.Teste>
  );
}
