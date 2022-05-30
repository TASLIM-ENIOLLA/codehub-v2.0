import {useRef, useState} from 'react'
import {server} from '../config'

export default ({year}) => {
    const home = useRef()
    const courses = useRef()
    const aboutUs = useRef()
    const pricing = useRef()
    const contact = useRef()

    const [sideBar, setSideBar] = useState(false)

    return (
        <>
            <header ref = {home} id="home" className="hero-area">
                {/* <div className="overlay">
                    <span></span>
                    <span></span>
                </div> */}
                <div style = {{zIndex: 100000000, minWidth: '300px'}} className = {'vh100 animated slideInRight shadow bg-white po-fixed top-0 right-0 p-3' + (
                    (sideBar)
                    ? ''
                    : ' d-none'
                )}>
                    <div className = 'mb-3 flex-h a-i-c j-c-space-between'>
                        <img height = '60' src="/img/cti-logo.png" alt="CodeHub CTI Logo" />
                        <div onClick = {() => {
                            setSideBar(!sideBar)
                        }} className="p-2">
                            <span className = 'fa text-dark fa-close fa-2x'></span>
                        </div>
                    </div>
                    <div>
                        <a className="text-dark bg-light d-block mb-4 p-3 rounded mx-3" onClick = {() => {
                            home.current.scrollIntoView({behavior: 'smooth'})
                            setSideBar(false)
                        }}>Home</a>
                        <a className="text-dark bg-light d-block mb-4 p-3 rounded mx-3" onClick = {() => {
                            aboutUs.current.scrollIntoView({behavior: 'smooth'})
                            setSideBar(false)
                        }}>About</a>
                        <a className="text-dark bg-light d-block mb-4 p-3 rounded mx-3" onClick = {() => {
                            courses.current.scrollIntoView({behavior: 'smooth'})
                            setSideBar(false)
                        }}>Courses</a>
                        <a className="text-dark bg-light d-block mb-4 p-3 rounded mx-3" onClick = {() => {
                            pricing.current.scrollIntoView({behavior: 'smooth'})
                            setSideBar(false)
                        }}>Pricing</a>
                        <a className="text-dark bg-light d-block mb-4 p-3 rounded mx-3" onClick = {() => {
                            contact.current.scrollIntoView({behavior: 'smooth'})
                            setSideBar(false)
                        }}>Contact</a>
                    </div>
                </div>
                <nav style = {{background: 'rgba(0,0,0,.8)'}} className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
                    <div className="container flex-h py-3 j-c-space-between a-i-c">
                        <a href="/" className="avbar-brand">
                            <img height = '60' src="/img/cti-white.png" alt="CodeHub CTI Logo" />
                        </a>
                        <div onClick = {() => {
                            setSideBar(!sideBar)
                        }} className="col-md-d-none">
                            <i className="fa text-white fa-navicon fa-2x"></i>
                        </div>
                        <div className="col-d-none col-md-d-block" id="navbarCollapse">
                            <a className="mx-3" onClick = {() => {
                                home.current.scrollIntoView({behavior: 'smooth'})
                            }}>Home</a>
                            <a className="mx-3" onClick = {() => {
                                aboutUs.current.scrollIntoView({behavior: 'smooth'})
                            }}>About</a>
                            <a className="mx-3" onClick = {() => {
                                courses.current.scrollIntoView({behavior: 'smooth'})
                            }}>Courses</a>
                            <a className="mx-3" onClick = {() => {
                                pricing.current.scrollIntoView({behavior: 'smooth'})
                            }}>Pricing</a>
                            <a className="mx-3" onClick = {() => {
                                contact.current.scrollIntoView({behavior: 'smooth'})
                            }}>Contact</a>
                        </div>
                    </div>
                </nav>  
                <div className="container">      
                    <div className="row space-100">
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <div className="contents">
                        <h2 className="head-title">
                            Become A Full Stack Web Developer In 2 Months.
                        </h2>
                        <p>
                            With The Right Knowledge From Well Experienced Tutors, You Can Become A Professional Web Developer In No Time
                        </p>
                        <div className="header-button">
                            <a href="#pricing" className="btn btn-border-filled">Get Started</a>
                            <a href="#contact" className="btn btn-border page-scroll">Contact Us</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-xs-12 p-0">
                        <div className="intro-img">
                            <img src="" alt="" />
                        </div>            
                    </div>
                    </div> 
                </div>             
            </header>
        
            <section ref = {aboutUs} id="business-plan">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 pl-0 pt-70 pr-5">
                            <div className="business-item-img">
                                <img src="img/business/business-img.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 pl-4">
                            <div className="business-item-info">
                                <h3>Our Story</h3>
                                <p>
                                    At CodeHub Technological Institute, we provide the best avenue for people to acqiure various IT skill and apply them to solve real life problems.

                                    We also empower people to allow them make a living by helping them become professionals who can deliver value-oriented services to clients.
                                </p>
                            </div>
                            <div className="business-item-info">
                                <h3>Our Vision</h3>
                                <p>
                                    As the world is a global village, we want to ensure that everyone becomes employable through the acquisition of IT skills irrespective of location.

                                    We also hope to make the world a better place by empowering people with IT skills and putting their skills to good use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section ref = {courses} id="services" className="section">
                <div className="container">
                    <div className = 'mb-5'>
                        <h3 className = 'text-c half-bold'>Our Course Modules</h3>
                        <p className = 'text-c fo-s-16'>Our web development course includes the following modules</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="rounded services-item text-center">
                                <div className="icon">
                                    <i className="fa fa-html5"></i>
                                </div>
                                <h4>HTML 5</h4>
                                <p>
                                    Deep learning of the most recent <abbr title="HyperText Markup Language">HTML</abbr> version
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="rounded services-item text-center">
                                <div className="icon">
                                    <i className="fa fa-css3"></i>
                                </div>
                                <h4>Bootstrap</h4>
                                <p>
                                    A popular <abbr title="Cascading StyleSheet">CSS</abbr> framework for responsive UI designs.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="rounded services-item text-center">
                                <div className="icon">
                                    <i className="lni-heart"></i>
                                </div>
                                <h4>Next JS</h4>
                                <p>            
                                    A React JS framework based on JavaScript for frontend development. It also allows easy backend integration.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="rounded services-item text-center">
                                <div className="icon">
                                    <i className="lni-heart"></i>
                                </div>
                                <h4><abbr title="PHP HyperText Preprocessor">PHP</abbr></h4>
                                <p>            
                                    A server scripting language used to interact with an Apache server.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="rounded services-item text-center">
                                <div className="icon">
                                    <i className="fa fa-database"></i>
                                </div>
                                <h4>MySql</h4>
                                <p>            
                                    A relational database for storing retrieving data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref = {pricing} id="pricing" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-text section-header text-center">  
                                <div>   
                                    <h2 className="section-title">Pricing Plans</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="row pricing-tables">
                        <div className="col-md-9 mx-auto col-xs-12">
                            <div className="pricing-table text-center">
                                <div className="pricing-details">
                                    <h3>standard</h3>
                                    <h1 className='text-center'>
                                        <sup className='fo-s-16'>NGN</sup>100,000
                                    </h1>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-6 text-l">
                                            <div className = 'text-primary underline mb-3'>What you stand to gain</div>
                                            <ul>
                                                <li>Acquisition of top IT skill</li>
                                                <li>Expertise in a modern web development framework</li>
                                                <li>Frontend development with Next.JS</li>
                                                <li>Backend development with PHP</li>
                                                <li>Web hosting and deployment experience</li>
                                                <li>A recognised certification in full stack web development</li> 
                                            </ul>    
                                        </div>
                                        <div className="col-xs-12 col-md-6 text-l">
                                            <div className = 'text-primary underline mb-3'>Our Learning Experience</div>
                                            <ul>
                                                <li>A Federal Government approved certificate</li>                  
                                                <li>A condusive learning environment</li>
                                                <li>A display screen for easy follow up during learning</li>
                                                <li>Mentorship during and after the duration of the course</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <a href="https://ravesandbox.flutterwave.com/pay/codehubtechnologicalinstitute2nhg" className="btn btn-primary">Proceed To Payment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact _ref = {contact} />

            <Footer year = {year} />

            <a href="#" className="back-to-top">
                <i className="lni-chevron-up"></i>
            </a>
        </>
    )
}

const Footer = ({year}) => {
    const [footerNewsletterData, setFooterNewsletterData] = useState({
        email: ''
    })

    const [response, setResponse] = useState({
        visible: false,
        theme: 'danger',
        message: 'Empty response!'
    })

    const formResponse = (obj) => {
        setResponse({
            ...response,
            ...obj
        })
    }
    return (
        <footer>
            <section id="footer-Content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                            <div className="footer-logo">
                                <img width = '160' className = 'p-0' src="/img/cti-white.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                            <div className="widget">
                                <h3 className="block-title">Subscribe Now</h3>
                                <p>
                                    Subscribe to our newsletter and get updates about our services.
                                </p>{
                                    (response.visible)
                                    ? (
                                        <div className = 'animated fadeIn col-12 px-0 pt-4'>
                                            <div style = {{borderRadius: '10px'}} className={`p-3 rounded-1x shadow-sm text-light text-caps bg-${response.theme}`}>
                                                {response.message}
                                            </div>
                                        </div>
                                    )
                                    : <></>
                                }
                                <form onSubmit = {async (e) => {
                                        e.preventDefault()

                                        const req = await fetch(`${server.backend.url}/php/processes/Newsletter.php`, {
                                            body: JSON.stringify(footerNewsletterData),
                                            method: 'POST'
                                        })
                                        const {type, message} = await req.json()
        
                                        formResponse({
                                            visible: true,
                                            theme: type === 'success' ? type : 'danger',
                                            message: message
                                        })

                                        if(type === 'success'){
                                            setFooterNewsletterData({email: ''})
                                            setTimeout(() => {
                                                formResponse({visible: false})
                                            }, 2000);
                                        }
                                    }} className="subscribe-area">
                                    <div>
                                        <input type="email" onChange = {(e) => {
                                            setFooterNewsletterData({
                                                ...footerNewsletterData,
                                                email: e.target.value
                                            })
                                        }} value = {footerNewsletterData.email} className="d-block w-100 p-2 rounded" placeholder="Enter Email" />
                                    </div>
                                    <button className = 'mt-3 px-5 rounded shadow text-white py-3 bg-success border-0 outline-0'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="site-info text-center">
                                    <p>
                                    &copy; {year} Developed by CodeHub Technological Institute.
                                    </p>
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

const Contact = ({_ref}) => {
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [response, setResponse] = useState({
        visible: false,
        theme: 'danger',
        message: 'Empty response!'
    })
    const [isMessageSending, setIsMessageSending] = useState(false)
    const formResponse = (obj) => {
        setResponse({
            ...response,
            ...obj
        })
    }
    return (
        <section ref = {_ref} id="contact" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-text section-header text-center">  
                            <div>   
                                <h2 className="section-title">Get In Touch</h2>
                                <div className="desc-text">
                                    <p>
                                        Leave us a message and be sure to get a response!
                                    </p>  
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <form onSubmit = {async (e) => {
                                e.preventDefault()
                                setIsMessageSending(true)

                                const req = await fetch(`${server.backend.url}/php/processes/Messages.php`, {
                                    body: JSON.stringify(contactFormData),
                                    method: 'POST'
                                })
                                const {type, message} = await req.json()
                                setIsMessageSending(false)

                                formResponse({
                                    visible: true,
                                    theme: type === 'success' ? type : 'danger',
                                    message: message
                                })

                                if(type === 'success'){
                                    setContactFormData({name: '', email: '', phone: '', subject: '', message: ''})
                                    setTimeout(() => {
                                        formResponse({visible: false})
                                    }, 2000);
                                }
                            }} id="contactForm">{
                                (response.visible)
                                ? (
                                    <div key = {new Date().getTime} className = 'animated fadeIn px-0 col-12 pb-5'>
                                        <div style = {{borderRadius: '10px'}} className={`p-3 rounded-1x shadow-sm text-light fo-s-15 text-caps bg-${response.theme}`}>
                                            {response.message}
                                        </div>
                                    </div>
                                )
                                : <></>
                            }
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" value = {contactFormData.name}  onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                name: e.target.value
                                            })
                                        }}/>
                                    </div>                                 
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Subject" className="form-control" value = {contactFormData.subject} onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                subject: e.target.value
                                            })
                                        }} />
                                    </div> 
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" value = {contactFormData.email} onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                email: e.target.value
                                            })
                                        }} />
                                    </div>                                 
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Phone" className="form-control" required value = {contactFormData.phone} onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                phone: e.target.value
                                            })
                                        }} />
                                    </div> 
                                 </div>
                                <div className="col-md-12">
                                    <div className="form-group"> 
                                        <textarea className="form-control" id="message"  name="message" placeholder="Write Message" rows="4" value = {contactFormData.message} onChange = {(e) => {
                                            setContactFormData({
                                                ...contactFormData,
                                                message: e.target.value
                                            })
                                        }}></textarea>
                                    </div>
                                    <div className="submit-button">
                                        <button className="btn transit btn-common" id="submit" type="submit" disabled = {isMessageSending}>Submit</button>
                                        <div id="msgSubmit" className="h3 hidden"></div> 
                                        <div className="clearfix"></div> 
                                    </div>
                                </div>
                            </div>            
                        </form>
                    </div>
                    <div className="col-lg-1">
                    
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="contact-img">
                            <img src="img/contact/01.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </section>
    )
}

export const getServerSideProps = () => {

    return {
        props: {
            year: new Date().getFullYear()
        }
    }
}