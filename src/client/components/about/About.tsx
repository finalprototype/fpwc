import React from "react";

import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/sea.mp4';
import Fallback from '../../images/fallback-sea.jpg';

const About: React.FunctionComponent = () => {
  return (
    <>
      <FmvBackground
        videoSource={Video}
        imageFallback={Fallback}
      />
      <PageContent>
        <p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing elit. Nunc vestibulum mauris eu tincidunt pharetra. Etiam et neque ac quam finibus <a href="#">vehicula</a>. Curabitur faucibus tortor at mollis dapibus. Vivamus vehicula dictum ante, vitae euismod elit aliquet nec. Donec lacinia lobortis magna, ut laoreet leo vulputate et. Sed nec massa vitae odio suscipit pellentesque eu et velit. Donec augue quam, aliquam vitae nisi vel, vulputate sagittis est. Praesent eu varius ex. Nam id purus congue, fringilla ante sit amet, ornare nulla. Nam eu dolor et ante sodales porta. Maecenas porttitor, mauris in efficitur bibendum, purus risus efficitur lacus, eu placerat nulla lorem a risus. Integer quis turpis ut elit ultricies venenatis. Mauris eget laoreet dui, quis rutrum lacus. Suspendisse placerat diam ligula, sed condimentum metus varius vel. Donec consectetur augue id risus aliquam vestibulum. Aenean quis libero elit.</p>
        <p>Vestibulum vestibulum auctor mi, nec tincidunt lorem pharetra eu. Vivamus id varius dui. Morbi pulvinar dolor pulvinar, molestie nibh eu, aliquam nulla. Proin rutrum leo sem, vel ornare enim fermentum sed. Suspendisse potenti. Cras vitae urna eleifend, suscipit enim in, dapibus mauris. Donec placerat mi vel velit laoreet, vel lacinia purus egestas. Mauris convallis, justo in hendrerit tincidunt, odio lectus tincidunt quam, in pharetra ex erat vitae ipsum. <a href="#test">Orci</a> varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis lobortis libero ipsum, et lobortis magna viverra sed. Donec finibus lacus tellus, at commodo ex feugiat eu. Curabitur feugiat auctor accumsan. Morbi tincidunt ornare libero, nec consequat quam gravida ornare. Vivamus egestas leo faucibus sem pharetra, vel sagittis leo egestas.</p>
        <p>Aenean id purus a dolor scelerisque sollicitudin vitae sit amet lacus. In tristique felis ut nunc vulputate, a maximus sapien consequat. Morbi scelerisque ligula a felis sodales, nec ullamcorper ante viverra. Aenean arcu purus, lobortis quis fringilla vel, consectetur ac mauris. Donec nec odio ac nisi ullamcorper luctus eu eget arcu. Etiam mauris quam, faucibus ut feugiat sed, finibus tempus ex. Suspendisse feugiat eu justo at faucibus. Nulla laoreet nisl a turpis venenatis, in dictum dui rhoncus. Mauris bibendum convallis tortor. Integer id lectus neque. Curabitur eget tristique nulla. Nullam rhoncus nec nunc vel dictum. Mauris bibendum ligula id nulla fermentum, id blandit nibh sodales. Duis pharetra sem eu nisi molestie, quis egestas turpis porttitor. <a href="#test">Sed sollicitudin accumsan massa, nec mattis orci venenatis non.</a></p>
        <p>Mauris aliquet venenatis augue, sed tempus est ullamcorper vitae. Proin varius faucibus elit sed ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec mattis nec nisl sit amet volutpat. Nunc ac turpis sed mi vestibulum pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse accumsan et risus vitae tincidunt. Aliquam metus est, commodo sed vulputate vel, interdum id arcu. Sed fringilla venenatis lacus sit amet fermentum. Pellentesque dolor enim, rhoncus at lacus rutrum, ullamcorper vestibulum turpis. Nulla at dui sit amet massa ultrices tempus.</p>
        <p>Duis ullamcorper quis dui vitae accumsan. Proin ac varius velit. Suspendisse ac magna elementum, elementum sapien eget, commodo neque. Nam id vehicula elit. Aliquam justo erat, auctor eu massa quis, feugiat convallis lectus. Nam imperdiet neque nec velit blandit, quis dictum tortor bibendum. Proin id nisi sem. Quisque condimentum nibh et pretium pellentesque. Proin lectus dui, molestie nec rutrum a, tincidunt gravida nulla. Nam sit amet ipsum sit amet nisl venenatis facilisis. Donec blandit laoreet eros in faucibus. In faucibus semper eleifend. Etiam ullamcorper diam turpis, in fringilla lorem tincidunt ac.</p>
      </PageContent>
    </>
  );
};

export default About;
