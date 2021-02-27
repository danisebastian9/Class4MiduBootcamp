export const Note = ({ content, date }) => {
  console.log({content})
  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};

export const getNumber = () => 2;
