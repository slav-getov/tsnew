type GreetProps = {
  name: string;
  count?: number;
};

export const Greet = (props: GreetProps) => {
  console.log(`Hey ${props.name}`);
  return (
    <div>
      <h2>
        Hello {props.name}, you have {props.count} new message
      </h2>
    </div>
  );
};
