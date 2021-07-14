import Text from '../components/Text';
import SimpleSlider from './Slider';


function QualifiedSupport() {
        return(
            <div className="qualified-support-container_wrapper">
                <div className='main_qualified-support_container'>
                    <div className='area'>
                        <Text title='Qualified 24/5 Support' subtitle='Qualified and experienced 24/5 support, 
                                                    backed with detailed manuals for Admin/Master/Slave sections.' />
                        <SimpleSlider />
                    </div>
                </div>
           </div>
                    // <div className="text">
                    //     <div className="title">
                    //         Qualified 24/5 Support
                    //     </div>
                    //     <div className="subtitle">
                    //         Qualified and experienced 24/5 support, 
                    //         backed with detailed manuals for Admin/Master/Slave
                    //         sections.
                    //     </div>
                    // </div>


        )
}

export default QualifiedSupport;