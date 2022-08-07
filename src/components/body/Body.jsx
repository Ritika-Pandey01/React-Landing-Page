import React from "react";
import "../../Styles/body.css"
import weLove from "../../assets/weLoveDev.png";
import man from "../../assets/man.png";
import man1 from "../../assets/man1.png";
import user from "../../assets/user.png";
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image3.png";
import image3 from "../../assets/image4.png";
import image4 from "../../assets/image5.png";
import mag from "../../assets/magazine.jpg";
function Body() {
    return (<div>
        <div className="container">


            <div className="bodyContainer">
                <h1>Developer Student Clubs</h1>
                <p>A community which inspires thousands.</p>
                <button className="btn">Apply</button>
            </div>
            <div className="imageConntainer"><img className="imageD" src={weLove} alt="Welovedev"></img></div>
        </div>

        <section id="team">
            <div className="teamGDSC">
                <h1>Team</h1>
                <div className="teamContainer">
                    <div className="container1">
                        <img className="avatar" src={man} alt="man"></img>
                        <div className="info">
                            <h3>Name</h3>
                            <h4>Role</h4>
                            <p>Skills</p>
                        </div>
                    </div>
                    <div className="container2">
                        <img className="avatar" src={man1} alt="man"></img>
                        <div className="info">
                            <h3>Name</h3>
                            <h4>Role</h4>
                            <p>Skills</p>
                        </div>

                    </div>
                    <div className="container3 ">
                        <img className="avatar" src={user} alt="man"></img>
                        <div className="info">
                            <h3>Name</h3>
                            <h4>Role</h4>
                            <p>Skills</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="articles">
            <div className="articlesGDSC">
                <h1>Articles</h1>
                <div class="row">
                    <div class="column">
                        <img src={image2} alt="image2" />
                        <img src={image1} alt="image1" />





                    </div>
                    <div class="column">
                        <img src={image4} alt="image4" />
                        <img src={image3} alt="image3" />
                       



                    </div>
                    <div class="column">
                        <img src={image2} alt="image2" />
                        <img src={image1} alt="image1" />

                        

                    </div>


                </div>
            </div>
        </section>

        <section id="events">
        <h1>Recent events </h1>
            <div className="eventsGDSC">
            
            <div className="video1"><iframe className="video" width="460" height="215" src="https://www.youtube.com/embed/6GFeGJ6jAy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
            <div className="video2"><iframe width="460" height="215" src="https://www.youtube.com/embed/p_KYK-DecdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </div>
        </section>
        <section id="magazines">
        <h1>Magazines</h1>
            <div className="magazinesGDSC">
            
            <div className="magazineImage">
                <img src={mag} alt="magazine"></img>
            </div>
            <div className="magazineContent">lorem ipsum...</div>
            </div>
        </section>
    </div>
    );
}
export default Body;