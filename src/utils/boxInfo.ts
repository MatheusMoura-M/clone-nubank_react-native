const messages = [
  "Prêmios mensais com Nubank Vida a partir de R$4/mês",
  "85 milhões de clientes vivem no mundo Nu. Confira",
  "Convide amigos para o Nubank e desbloqueie brasões incríveis.",
  "Pague boletos no crédito em até 12x, direto pelo app.",
  "Dinheiro parado? Conheça o RDB Planejado do Nu.",
  "Pix no crédito: transfira sem usar o saldo da conta.",
  "Meus limites Pix: proteção extra para suas transferências.",
];

const getRandomMessages = () => {
  const shuffled = messages.sort(() => 0.5 - Math.random()).slice(0, 3);
  return shuffled;
};

export const selectedMessages = getRandomMessages();
