import HeaderSectionTwo from "@/global/components/headerSection/HeaderSectionTwo";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/global/shadcn/ui/tabs";
import { IoMdHome } from "react-icons/io";
import { FaPenNib } from "react-icons/fa";
import FilledSVG from "./assets/svg/FilledSVG";
import General from "./_blocks/general/General";
import Host from "./_blocks/host/Host";
import Support from "./_blocks/support/Support";
import Product from "./_blocks/product/Product";
import ElectricSVG from "./assets/svg/ElectricSVG";

export default function FrequentlyQuestions() {
  return (
    <section className="container flex flex-col gap-20 items-center justify-center py-16 w-full">
      <HeaderSectionTwo
        prevText={"تعرف على كيفية البدء"}
        title={"الأسئلة المتداولة"}
        subtitle={
          "انضم إلى مجتمع عمرتي الآن للحصول على تحديثات مجانية وأيضًا الكثير من الهدايا المجانية في انتظارك أو اتصل بالدعم "
        }
      />
      <Tabs
        dir="rtl"
        defaultValue="general"
        className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 w-full"
      >
        <TabsList className="flex md:flex-col space-y-1 h-auto bg-white flex-wrap">
          <TabsTrigger
            value="general"
            className="shadow-none min-w-[160px] justify-center md:justify-start"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
              <IoMdHome className="text-[#777E90] w-5 h-5" />
              <span className="text-[#777e90] text-sm">عام</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="support"
            className="shadow-none min-w-[160px] justify-center md:justify-start"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
              <FilledSVG className="text-[#777E90] w-5 h-5" />
              <span className="text-[#777e90] text-sm">الدعم</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="host"
            className="shadow-none min-w-[160px] justify-center md:justify-start"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
              <ElectricSVG className="text-[#777E90] w-5 h-5" />
              <span className="text-[#777e90] text-sm">الاستضافة</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="product"
            className="shadow-none min-w-[160px] justify-center md:justify-start"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
              <FaPenNib className="text-[#777E90] w-5 h-5" />
              <span className="text-[#777e90] text-sm">المنتج</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <div className="w-full">
          <TabsContent dir="rtl" value="general">
            <General />
          </TabsContent>
          <TabsContent dir="rtl" value="support">
            <Support />
          </TabsContent>
          <TabsContent dir="rtl" value="host">
            <Host />
          </TabsContent>
          <TabsContent dir="rtl" value="product">
            <Product />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
