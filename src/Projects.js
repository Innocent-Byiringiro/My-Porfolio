import './index.css'
function Projects(props){
    return(
    <div>
        <span>
            <noscript>Completed Projects</noscript>
            <div class="props-container">
                <span class="props"><img src={props.img}></img></span>
                <span class="props">{props.name}</span>
                <span class="props">{props.link}</span>

            </div>
        </span>
    </div>
    )
}
export default Projects;