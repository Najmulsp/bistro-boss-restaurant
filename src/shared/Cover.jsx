import PropTypes from 'prop-types';

const Cover = ({ img, title, details }) => {
  return (
    <div>
      <div
        className="hero h-[550px]"
        style={{
          backgroundImage:
            `url("${img}")`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[400px] lg:w-[800px] py-16 bg-gray-900 bg-opacity-70">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 w-4/5 mx-auto">
              {details}
            </p>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

Cover.propTypes = {
    img: PropTypes.img,
    title: PropTypes.string,
    details: PropTypes.string,
}
export default Cover;
