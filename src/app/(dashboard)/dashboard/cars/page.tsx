import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import Content from "./Content";
import { fetchCars } from "@/services/api/cars";

export default async function Cars() {
  const carLists = await fetchCars();
  return (
    <DashboardLayout title="Cars">
      <Content carLists={carLists} />
    </DashboardLayout>
  );
}
