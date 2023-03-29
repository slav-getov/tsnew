type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};

export const Greet = ({ name, count, isLoggedIn }: GreetProps) => {
  console.log(`Hey ${name}`);
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Hello ${name}, you have ${count} new messages`
          : `Welcome guests now`}
      </h2>
    </div>
  );
};
