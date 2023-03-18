import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { img } from "~/assert/img";
import Button from "~/component/Button";
import config from "~/config";


const SlideShow = () => {
    const [bgSrc, setBgSrc] = useState<string>('https://cdn.dribbble.com/userupload/3499621/file/original-413793a429ac91e673918e9f980df232.mp4')

    return ( 

        <Container>
            <div className="slide-show">
                <div className="video-progress-container">
                    <video 
                        disablePictureInPicture
                        preload="auto" 
                        src={bgSrc}
                        playsInline 
                        loop={true}
                        draggable="false" 
                        className="" 
                        autoPlay
                        muted>
                    </video> 
                </div>


                <div className="btn-wrapper">
                <Link to={`${config.routePath.collection}`} className="btn-slice">
                    <div className="top"><span>shop now</span></div>
                    <div className="bottom"><span>shop now</span></div>
                </Link>

                </div>
            </div>

                
        </Container>
     );
}
 
export default SlideShow;

const Container = styled.div `
    

    .slide-show{
        position: relative;

        @media screen and (max-width : 768px) {
            .video-progress-container{
                height: 212px;
            }
        }
        @media screen and (min-width : 769px) {
             .video-progress-container{
                height: 450px;
            }
        }

        .video-progress-container{
            overflow: hidden;
            position: relative;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            video {
                position: absolute;
                width: 100%;

                
            }
        }

        .btn-wrapper{
            height: 50px;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            bottom: 10px;
            text-align: center;
            font-family: 'Fjalla One', sans-serif;
            text-transform: uppercase;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;

                .btn-slice {
                padding: 1.2rem 2.5rem;
                border: 2px solid #ffffff;
                border-radius: 0rem;
                color: #ffffff;
                font-size: 0.6875rem;
                font-weight: 700;
                letter-spacing: 0.3rem;
                position: relative;
                
                -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
                -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */

                -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
                -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */
                }

                .btn-slice .top  {
                position: relative;
                height: 6px;
                overflow: hidden;
                top: 0;
                -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
                -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */

                -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
                -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */
                
                -webkit-transition-delay:0.35s;     
                }

                .btn-slice .bottom  {
                position: relative;
                height: 6px;
                overflow: hidden;
                bottom: 0;
                -webkit-transition: all 300ms cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
                -webkit-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -moz-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -o-transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                transition: all 300ms cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */

                -webkit-transition-timing-function: cubic-bezier(1.000, 0, 0.025, 1); /* older webkit */
                -webkit-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -moz-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                -o-transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); 
                transition-timing-function: cubic-bezier(1.000, -0.055, 0.025, 1.040); /* custom */
                
                -webkit-transition-delay:0.35s;     
                }

                .btn-slice .bottom span {
                top: -6px;
                position: absolute;
                left: 0;
                }

                .btn-slice:hover .top {
                top: -5px;
                -webkit-transition-delay:0.35s;     

                }

                .btn-slice:hover .bottom {
                bottom: -5px;
                -webkit-transition-delay:0.35s;     
    
                }
                .btn-slice:hover, .btn-slice:focus, .btn-slice:active {
                margin-left: 10px;
                }
                .btn-slice:before{
                content: '';
                height: 1px;
                width: 60px;
                background-color: #ffffff;
                position: absolute;
                margin-top: 6px;
                right: -35px;
                
                -webkit-transition: all 1000ms cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
                -webkit-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -moz-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -o-transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                transition: all 1000ms cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */

                -webkit-transition-timing-function: cubic-bezier(0.890, 0, 0.140, 1); /* older webkit */
                -webkit-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -moz-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                -o-transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); 
                transition-timing-function: cubic-bezier(0.890, -0.170, 0.140, 1.225); /* custom */
                }
                .btn-slice:hover:before{
                width: 130%;
                }
        }

    }


`
