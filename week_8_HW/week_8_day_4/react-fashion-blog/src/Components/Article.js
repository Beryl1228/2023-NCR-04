import React from 'react';
import bg1 from '../images/blog-image-1.jpeg';
import bg2 from '../images/blog-image-2.jpeg';

const Main = () => {
    return (
        <section>
            <article>
                <time dateTime="2020-11-12">11/12/20</time>
                <h2>On the Street in Brooklyn</h2>
                <img src={bg1} alt="bg-1" />
                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Tristique senectus
                    et netus et malesuada fames ac turpis egestas. Eget nunc scelerisque viverra mauris in aliquam.
                    Odio eu feugiat pretium nibh ipsum consequat. Ut aliquam purus sit amet. Velit ut tortor pretium
                    viverra suspendisse. Eu consequat ac felis donec et odio pellentesque diam. Facilisi morbi tempus
                    iaculis urna. Tellus in metus vulputate eu scelerisque felis. At risus viverra adipiscing at
                    in tellus.</p>
                <aside>
                    <a href="...">Continues ...</a>
                </aside>
            </article>

            <article>
                <time dateTime="2020-11-11">11/11/20</time>
                <h2>Vintage in Vogue</h2>
                <img src={bg2} alt="bg-2" />
                <p>Setus vulputate eu scelerisque felis imperdiet proin fermentum leo. Eget sit amet tellus cras
                    adipiscing enim. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Nisi lacus sed viverra
                    tellus in hac. At varius vel pharetra vel turpis nunc eget lorem dolor. Viverra aliquet eget sit
                    amet tellus. Tortor id aliquet lectus proin nibh nisl. Molestie ac feugiat sed lectus vestibulum.
                    Velit euismod in pellentesque massa placerat duis ultricies. Justo nec ultrices dui sapien eget.
                    Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Suspendisse in est ante in.
                    At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Tortor dignissim convallis aenean
                    et tortor at. At urna condimentum mattis pellentesque id nibh tortor id. Est ultricies integer quis
                    auctor. Risus nullam eget felis eget nunc lobortis. Sollicitudin aliquam ultrices sagittis orci a
                    scelerisque purus. Adipiscing elit ut aliquam purus sit amet. Sed nisi lacus sed viverra tellus
                    in hac.</p>
                <aside>
                    <a href="...">Continues ...</a>
                </aside>
            </article>
        </section>
    );
};

export default Main;