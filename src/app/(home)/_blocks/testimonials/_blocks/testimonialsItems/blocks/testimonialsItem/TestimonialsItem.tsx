type Props = {
  item: any;
};

export default function TestimonialsItem({ item }: Props) {
  return (
    <div>
      {item?.title}
    </div>
  );
}