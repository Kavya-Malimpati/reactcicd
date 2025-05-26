type AdviceCard = {
  image: string;
  tag: string;
  title: string;
  text: string;
};

type AdviceCardProps = {
  card: AdviceCard;
};

const AdviceCardComponent: React.FC<AdviceCardProps> = ({ card }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <img src={card.image} alt="" className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="uppercase text-xs font-semibold text-gray-600 tracking-wide mb-2">{card.tag}</div>
      <h2 className="text-xl text-gray-700 font-light mb-3">{card.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
    </div>
  </div>
);
export default AdviceCardComponent;