import './Form.css'
import InputText from '../InputText'
import DropDown from '../DropDown'
import Button from '../Button'
const Form = () => {

    const teams = [
        "Back-End",
        "Front-End",
        "Devops",
        "Mobile",
        "Data Science"
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("Form Submitted")
    }
    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill in the employee's information:</h2>
                <InputText label="E-mail" req={true} placeholder="Enter your e-mail here..." />
                <InputText label="Password" req={true} placeholder="Enter your password here..." />
                <InputText label="Job Title" req={true} placeholder="Enter your job title here..." />
                <DropDown label="Team" req={true} items={teams} />
                <Button>Submit</Button>

            </form>
        </section>
    )
}
export default Form