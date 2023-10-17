import templateOneImg from "../Images/Brahmadutta Dalai_1_page-0001.jpg";
import templateTwoImg from "../Images/Brahmadutta Dalai 2_page-0001.jpg";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";

export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
];
