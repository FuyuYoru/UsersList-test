export const CustomTooltip = ({ payload, label, active }) => {
  if (!active || !payload || payload.length === 0) return null;

  const value = payload[0].value;

  const formattedValue = `${value > 0 ? '+' : '-'}${Math.round(value * 10) / 10}%`;

  return (
    <div
      className="bg-transparent p-2"
    // style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <p className="text-[#5ea753] text-xl text-center">{formattedValue}</p>
    </div>
  );
};
