import React from 'react';

const ProjectThumbNail = (props) => {
    return (
        <div class="post-masonry col-md-4 col-sm-6">
            <div class="post-thumb">
                <img src="https://pbs.twimg.com/profile_images/378800000334311614/cdfed842c12b1964f784d03f0fdb9a30_400x400.jpeg" alt="" />
                <div class="title-over">
                    <h4><a href="#" class="text-center">FINAL PROJECT (In progress)</a></h4>
                </div>
                <div class="post-hover text-center">
                    <div class="inside">
                        <h6><a href="https://github.com/Plantsy-Dream-Team/Plantsy_App">GitHub</a></h6>
                        <h4><a href="#">Plantsy App</a></h4>
                        <p>This is a social media app that will connect a community of gardeners. Hobbyist
                            can comment on eachothers plants and provide helpful tips and tricks for
                            gardening. They can update the state of their plants and ask for help or
                            inform others in theirretty proud given my experience. We hope to have
                                        it's firt stages ready by October 10th</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectThumbNail;