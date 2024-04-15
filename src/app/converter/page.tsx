import Conversion_history from "@/Components/Conversion_history/Conversion_history";
import Conversion from "@/Components/Conversion_block/Conversion";
import Convert_currency_educational from "@/Components/Convert_currency_educational/Convert_currency_educational";

export default function Page() {
    return (
      <>
        <Convert_currency_educational/>
        <Conversion/>
        <Conversion_history/>
      </>
    );
  }
  