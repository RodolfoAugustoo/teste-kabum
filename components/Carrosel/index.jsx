import Image from "next/image";
import Card from "../Offer/Card";
import ArrowPrevious from "../../assets/icons/arrow-previous.svg";
import ArrowNext from "../../assets/icons/arrow-next.svg";

import * as C from "./style";

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
  ];

  return (
    <C.Div>
      <C.ArrowPrevious>
        <img src={ArrowPrevious} />
      </C.ArrowPrevious>
      {ofertas.map((oferta) => (
        <Card key={oferta.id} oferta={oferta} />
      ))}
      <C.ArrowNext>
        <img src={ArrowNext} />
      </C.ArrowNext>
    </C.Div>
  );
}
