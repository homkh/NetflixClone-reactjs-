import style from './faqSec.module.css'
import Faqbutton from './FaqButton'
import Button from './Button'
export default function FaqSection(props) {
    return (
        <>
            <div className={style.container}>
                <div className={style.heading}>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className={style.button}>
                    <Faqbutton title="What is Netflix?"/>
                    <Faqbutton title="How much dose Netflix cost?"/>
                    <Faqbutton title="where can I whatch?"/>
                    <Faqbutton title="How do I cancel?"/>
                    <Faqbutton title="What can I watch on Netflix?"/>
                    <Faqbutton title="Is Netflix good for kids?"/>
                </div>
            
            <div className={style.third_section}>Ready to watch? Enter your email to create or restart your membership.</div>
            <div className={style.forth_section}>
                <input className={style.impt} type="text" placeholder='Email address' name='inpu_fields2'/>
                <Button btnText="Get Started"/>
            </div>
            </div>

        </>
    )
}
