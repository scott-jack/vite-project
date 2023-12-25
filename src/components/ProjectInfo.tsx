interface Props {
  isData: boolean;
  isPlanAt: boolean;
  isSpellShocked: boolean;
}

const ProjectInfo = ({ isData, isPlanAt, isSpellShocked }: Props) => {
  return (
    <div className="col-lg-8 mx-auto">
      <br></br>
          <p className={isData ? 'lead mb-4' : 'lead mb-4 d-none'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum porttitor enim, 
          at tristique justo laoreet in. Curabitur porta scelerisque neque, eu sodales est lobortis facilisis. Donec ut ex at ipsum 
          pellentesque dictum nec pulvinar felis. Aenean ex sem, finibus ac tortor a, pretium euismod felis. Morbi quis risus sit 
          amet tortor aliquam rhoncus nec quis erat. Nam orci ligula, congue a turpis vel, sollicitudin vulputate sapien. Nam sit 
          amet dui ac urna cursus eleifend. In aliquet venenatis est a feugiat. Nullam malesuada, lorem ut finibus pretium, justo 
          felis dictum neque, nec efficitur quam purus nec urna. Sed rutrum odio feugiat semper porttitor. Sed viverra id purus non 
          aliquam. In sed tortor et neque dignissim pellentesque id mollis nunc. Class aptent taciti sociosqu ad litora torquent per 
          conubia nostra, per inceptos himenaeos. Suspendisse id pulvinar dui.</p>
          <p className={isPlanAt ? 'lead mb-4' : 'lead mb-4 d-none'}>Aliquam ac scelerisque dui. Aenean sagittis laoreet suscipit. Aenean vulputate risus mi, at vulputate 
          dolor luctus non. Nulla dapibus risus nec ultrices tempus.  Vestibulum ac hendrerit mauris. Nullam id erat porttitor, imperdiet 
          ex eu, pellentesque ligula. Aliquam dui augue, tempus in ligula ut, sagittis luctus purus. Donec scelerisque dictum sapien 
          euismod porttitor.</p>
          <p className={isSpellShocked ? 'lead mb-4' : 'lead mb-4 d-none'}>Aenean feugiat mollis augue, vel consectetur turpis iaculis non. Vivamus ac sem molestie, dictum lacus 
          ut, facilisis nibh. Aenean congue suscipit sapien, et tempor elit rutrum et. Curabitur congue sed ante a hendrerit. Aliquam 
          rhoncus placerat venenatis. Duis posuere egestas viverra. Curabitur rutrum nisl tellus, imperdiet mollis metus venenatis nec. 
          Integer malesuada elit sit amet tellus tempus elementum. Etiam lorem nunc, pellentesque eget nisi non, facilisis porta eros. 
          Aliquam erat volutpat.</p>
        </div>
  );
};

export default ProjectInfo;
