import React, {useState} from 'react'

export default function About() {
    const [mode, setMode] = useState("Enable dark mode");
    const [aboutStyle, setAboutStyle] = useState( {color: "black",backgroundColor: "white"} );

    const toggleStyle = ()=>{
        if(aboutStyle.color==='black'){
            setAboutStyle({color: "white",backgroundColor: "black"});
            setMode("Disable dark mode");
        } else{
            setAboutStyle({color: "black",backgroundColor: "white"});
            setMode("Enable dark mode");
        }
    }

    return (
        <div className="container" style={aboutStyle}>
            <h2 className='my-3'>About us</h2>
            <div className="accordion my-4" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id='headingOne'>
                    <button className="accordion-button" style={aboutStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby='headingOne' data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={aboutStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={aboutStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={aboutStyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={aboutStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={aboutStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className='btn btn-primary' type='button' onClick={toggleStyle}>{mode}</button>
            </div>
        </div>
    )
}
