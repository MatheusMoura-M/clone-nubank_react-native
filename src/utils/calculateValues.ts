const list = [
  {
    id: 1,
    label: "Boleto - conta de luz",
    value: "245,40",
    date: "17/08/2023",
    type: 0, // gastos
  },
  {
    id: 2,
    label: "Pix - Cliente X",
    value: "2.285,10",
    date: "19/08/2023",
    type: 1, // entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "4.455,50",
    date: "25/08/2023",
    type: 1, // entradas
  },
  {
    id: 4,
    label: "Ração do cachorro",
    value: "133,00",
    date: "15/09/2023",
    type: 0, // gastos
  },
];

const calculateBalance = () => {
  let total = 0;
  list.map((item) => {
    if (item.type === 1) {
      const numberFormated = parseFloat(
        item.value.replace(/\./g, "").replace(",", ".")
      );
      total += numberFormated;
    }
  });

  const stringFormated = total
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "")
    .trim();

  return stringFormated;
};

const calculateExpenses = () => {
  let total = 0;
  list.map((item) => {
    if (item.type === 0) {
      const numberFormated = parseFloat(
        item.value.replace(/\./g, "").replace(",", ".")
      );
      total += numberFormated;
    }
  });

  const stringFormated = total
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "")
    .trim();

  return stringFormated;
};

export { calculateBalance, calculateExpenses };
