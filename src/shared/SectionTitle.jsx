import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
   
    return (
        <div className='text-center mb-10'>
                <h2 className='text-2xl text-yellow-600 py-4'>{subHeading}</h2>
                <h1 className='text-4xl font-semibold border-y-4 py-4 w-96 mx-auto uppercase'>{heading}</h1>
            </div>
    );
};
SectionTitle.propTypes = {   
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}
export default SectionTitle;