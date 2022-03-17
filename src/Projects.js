import './index.css'
function Projects(props){
    return(
    <div>
        <span>
            <noscript>Completed Projects</noscript>
            <div class="props-container">
                <p class="props"><img src={props.img}></img></p>
                <p class="props">{props.name}</p>
                <p class="props">{props.link}</p>

            </div>
        </span>
    </div>
    )
}
export default Projects;