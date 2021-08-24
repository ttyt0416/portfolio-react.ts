import React from "react";
import "./examplepage.style.scss";

const Examplepage: React.FC = () => {
  const lorem: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id posuere nisi, placerat luctus libero. Fusce non ultricies orci. Fusce ut nisi pharetra, tristique quam ut, lacinia risus. Praesent suscipit maximus suscipit. Mauris vestibulum elit nec dictum scelerisque. Aenean ultricies nisi id suscipit pharetra. Praesent egestas consequat arcu, in interdum nulla scelerisque ut. Integer feugiat sem ac vestibulum iaculis. Proin laoreet commodo eros, sit amet tempus urna. Praesent nec facilisis nunc, bibendum iaculis nibh. Fusce cursus eget lacus a tristique. Vivamus ligula leo, efficitur in ligula eget, viverra rhoncus leo. Morbi blandit aliquam est id vulputate. Cras egestas ultricies ornare. Morbi quis nisi nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sollicitudin, massa sit amet gravida scelerisque, mi turpis fringilla risus, vel consectetur lorem odio a ante. Mauris ac lorem ut ex elementum euismod ut sit amet quam. Fusce non fermentum ex. Integer mattis ante nec dui consectetur, sit amet facilisis dui condimentum. Etiam id tellus ligula. Donec consectetur diam nec purus blandit rutrum. Ut eget nisi blandit elit efficitur consequat. Mauris vehicula ex non nisi malesuada tristique. Fusce eros leo, cursus ut nisi quis, ultrices porttitor ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at massa id metus ullamcorper pellentesque eget at elit. In a arcu suscipit, pretium mauris ut, sollicitudin magna. Vestibulum vulputate imperdiet cursus. Praesent auctor suscipit felis ac lacinia. Donec vitae orci vel nisi hendrerit lacinia. Nullam vulputate molestie erat, quis sollicitudin magna blandit vitae. Vestibulum dignissim risus at pellentesque cursus. Vivamus vitae tincidunt risus, eu interdum diam. In vel sem metus. Nunc dapibus varius turpis, ac vestibulum dolor bibendum ut. Etiam blandit enim ut ornare molestie. Aenean eget posuere nunc, in laoreet quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tempus nec nunc eu vestibulum. Nullam sed eros eu est fermentum condimentum elementum vel dui. Donec ornare feugiat pulvinar. Nam imperdiet augue mi, vitae consectetur sem iaculis et. Curabitur congue nisl vitae felis vestibulum malesuada. Mauris eu mollis turpis. Donec at fringilla augue. Duis quis feugiat nulla, non malesuada orci. Nunc tempor, lacus eu dignissim pellentesque, enim nunc pretium turpis, in lobortis massa nunc at urna. Nam euismod, nisi id dapibus commodo, quam lorem pellentesque velit, eu ultricies enim ligula non augue. Etiam eros metus, dignissim ut iaculis volutpat, eleifend sed elit. Maecenas varius tempor urna. Etiam non egestas dolor. Nullam eget dolor faucibus erat pretium pharetra vel ac justo. Donec blandit, erat ac tempor vehicula, mauris ipsum dignissim tortor, vitae semper tellus lectus id tortor. Suspendisse risus metus, tempus id nisi quis, cursus mollis nisi.";

  const paragraph: string[] = lorem.split(" ");

  return (
    <div className="examplepage">
      <div className="examplepage__container">
        {paragraph.map((p, i) => (
          <div className="examplepage__text" key={i}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examplepage;
