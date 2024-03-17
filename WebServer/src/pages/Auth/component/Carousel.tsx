import { Button } from "@mui/material"
import Carousel from "react-material-ui-carousel"

type ChildProps = {
    onButtonClick: (data: string) => void;
}
export default function CarouselItem({onButtonClick}:ChildProps) {

    const items = [
        {
            title: 'Welcome to Organic Mind',
            description: 'Welcome to Organic Mind! All-in-one solution for managing tasks and boosting productivity',
            buttonText: 'Next'
        },
        {
            title: 'Easy Task Management',
            description: 'Simplify Task Management. Add, edit, and complete task seamlessly for clutter-free life',
            buttonText: 'Next'
        },
        {
            title: 'Stay Organized Anywhere',
            description: 'Sync tasks across devices, stay organized whether you are at home, in the office, or on the go',
            buttonText: 'Sign Up'
        }
    ]

    const handleButtonClicked = () => {
        onButtonClick('signup');
    }

    return (
        <div style={{ width: '70%', margin: 'auto' }}>
            <Carousel autoPlay={false}>
                {items.map((item, idx) => 
                    <div style={{ padding: '20px'}} key={idx}>
                        <h2 style={{ color: '#fcba03' }}>{item.title}</h2>
                        <p>{item.description}</p>
                        {idx === 2 && 
                            <Button color="primary" variant="outlined" onClick={() => handleButtonClicked()}>Sign Up</Button>
                        }
                    </div> 
                )}
            </Carousel>
        </div>
    )
}