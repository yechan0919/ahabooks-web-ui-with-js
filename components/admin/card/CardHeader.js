const CardHeader = ({ content }) => {
  return (
    <div className='card-header'>
      <div className='row algin-items-center'>
        <div className='col'>
          <h4 className='card-title'>
            <b>{content}</b>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
