
import '../ProjectList.css';

export default function ProjectList({ projects }) {
    const projectsItem = projects.map((item, index) => <div key={index} className='itemProjects'><img src={item.img} alt={item.category} /></div>)
    return (
        <div className='projects_list'>{projectsItem}</div>
    )
}