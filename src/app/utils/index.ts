export const formatNominal = (value: number) => {
  return value.toLocaleString('id', { style: 'currency', currency: 'IDR' });
};