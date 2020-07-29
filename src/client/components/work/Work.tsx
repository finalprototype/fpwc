import React from 'react';

import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/synthwave.mp4';
import Fallback from '../../images/bkgds/synthwave.jpg';

const Work: React.FunctionComponent = () => {
  const sidebar = (
    <div>
      {[...Array(30).keys()].map((v) => (
        <div key={'sidebar{v + 10}'}>Sidebar item number {v}</div>
      ))}
    </div>
  );
  return (
    <FmvBackground
      videoSource={Video}
      imageFallback={Fallback}
    >
      <PageContent flex Sidebar={sidebar}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin ante elit, aliquet ut pretium a, dictum sed nulla. Donec et mi
            quis libero placerat varius. Pellentesque in molestie sapien. Ut nisl
            leo, suscipit in sem ut, maximus semper neque. Ut feugiat semper mauris,
            sed gravida nunc viverra pellentesque. Vivamus id convallis diam, eget
            gravida diam. Curabitur ultrices ac magna sit amet congue. In dapibus ut
            neque in efficitur. Praesent suscipit volutpat tellus, quis sagittis
            magna feugiat vel. Etiam vel magna sollicitudin, faucibus urna in,
            pellentesque arcu. Nulla varius facilisis nisl eget congue. Vivamus
            posuere magna mollis felis dapibus, at interdum odio dapibus. Nullam
            aliquam ante in tortor elementum, egestas venenatis velit tristique.
            Nunc luctus sed arcu posuere pretium. Proin vel nisl eu nunc feugiat
            consectetur et nec ipsum. Suspendisse id pellentesque urna, at hendrerit
            turpis. Vivamus nec augue sit amet quam aliquam pharetra ornare et
            lectus. Curabitur tristique felis in urna elementum vehicula. Proin
            interdum ornare massa, ac blandit diam bibendum eget. Duis id nibh nisi.
            Etiam sapien dolor, efficitur sed metus quis, fermentum rutrum augue.
            Suspendisse quam nisl, feugiat quis congue et, vehicula feugiat neque.
            Praesent fermentum purus in nulla fringilla, quis blandit sem tristique.
            Aenean sodales erat odio, ac ultrices risus porta sed. Curabitur massa
            tellus, tincidunt a placerat in, aliquam accumsan sapien. Ut rhoncus,
            ante in posuere hendrerit, ex turpis rhoncus lacus, sit amet convallis
            sapien arcu et mauris. Mauris dictum augue consequat, tristique dolor
            ut, lobortis nulla. Nam fringilla lacus eu venenatis sagittis.
            Pellentesque bibendum tellus sit amet lacus posuere mollis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Mauris sed nisi risus.
            Proin metus turpis, hendrerit nec venenatis et, laoreet nec neque. Sed
            laoreet urna at turpis porta, ac lacinia nisi aliquet. Donec vel
            vestibulum lectus. Curabitur sapien dolor, porta eget aliquam in,
            volutpat non magna. Pellentesque id ultrices lacus. Praesent
            pellentesque mollis egestas. Donec non purus eu nisi interdum hendrerit.
            Nulla ut ultricies purus, in faucibus diam. Nullam mi arcu, vehicula non
            urna vel, commodo tincidunt enim. Fusce dolor est, auctor eu vehicula
            sed, tincidunt sed ligula. Quisque vitae egestas ex, et sodales nulla.
            Sed augue nulla, consequat ac magna quis, facilisis rutrum risus.
            Curabitur fermentum ultricies augue quis tincidunt. Maecenas auctor,
            lorem a dictum varius, metus purus rutrum dui, a pulvinar elit lectus ut
            felis. Nullam nec mauris faucibus, facilisis odio sed, semper arcu.
            Etiam consequat, orci vel posuere cursus, felis urna varius mi, in
            pretium tellus nunc id erat. Quisque semper massa vel volutpat volutpat.
            Sed consequat gravida lectus. Donec vestibulum molestie massa in
            iaculis. Praesent bibendum urna nisl, tincidunt dictum tortor vestibulum
            nec. Vestibulum vel metus quis quam ultricies bibendum. Nunc vel justo
            id sapien facilisis imperdiet et id urna. Morbi bibendum bibendum lorem,
            ut semper eros scelerisque ac. Mauris auctor in lorem vitae dignissim.
            Etiam dolor purus, elementum at diam id, faucibus ullamcorper massa.
            Donec consectetur velit eu diam mattis euismod. Aliquam sagittis
            faucibus nisl, aliquet luctus enim placerat a. Sed luctus diam id felis
            ultricies congue. Aliquam ac augue purus. Etiam faucibus velit at
            pulvinar dictum. Praesent commodo vel metus sed dictum.
          </p>
        </div>
      </PageContent>
      <Footer fixed />
    </FmvBackground>
  );
};

export default Work;
