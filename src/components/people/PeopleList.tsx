type PeopleListProps = {
  names: Array<{
    first: string;
    last: string;
  }>;
};

const PeopleList = ({ names }: PeopleListProps) => {
  return (
    <div>
      {names.map((singleName) => (
        <p>
          {singleName.first} {singleName.last}
        </p>
      ))}
    </div>
  );
};

export default PeopleList;
