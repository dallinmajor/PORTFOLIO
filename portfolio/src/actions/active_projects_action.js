import Projects from '../reducers/projects';

export function filterProjects(tool) {
    console.log(tool);
    const filtered = Projects.filter(project => Projects.tools.includes(tool) ? project: null);
    console.log(filtered);
}