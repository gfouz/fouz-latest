import { useSnapshot } from "valtio";
import { state } from "store/store";
import s from "./ServiceCollector.module.scss";

interface Service {
  name: string;
  service: React.ReactNode;
}
interface ServiceList {
  list: Service[];
}
const ServiceCollector = (props: ServiceList) => {
  const { list } = props;
  const snap = useSnapshot(state);
  const selected = snap.opt;
  let component;
  {
    list.map((item) => {
      switch (selected) {
        case `${item.name}`:
          component = item.service;
          break;
      }
    });
  }
  return <div className={s.container}>{component}</div>;
};

export default ServiceCollector;
