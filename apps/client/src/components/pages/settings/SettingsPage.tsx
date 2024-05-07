import Layout from "@/components/layouts/Layout";
import AccountForm from "@/components/pages/settings/components/AccountForm";
import SettingsList from "@/components/pages/settings/components/SettingsList";
import { ReactNode } from "react";

export default function settingsPage() {
  return (
    <Layout>
      <div className="p-10 flex gap-10 h-full min-h-[100vh] text-white w-full bg-zinc-800">
        <div className="basis-1/6">
          <SettingsList chosenSetting="account" />
        </div>
        <div className="basis-5/6 ">
          <h1 className="font-bold text-3xl">Settings</h1>
          <p className="italic">
            Manage your account settings and set e-mail preferences.
          </p>
          <AccountForm />
        </div>
      </div>
    </Layout>
  );
}

settingsPage.getLayout = function getLayout(page: ReactNode) {
  return <>{page}</>;
};
