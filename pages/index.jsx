import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
// import NestedLayout from "@/components/nested

// Index.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default function Index() {
  return (
    <Layout>
      <div>
        iftekher mahmud

        <Link href={'project'}>project</Link>
      </div>
    </Layout> 
  )
}
