interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async () => {
  return <div>This is a dashboard</div>;
};

export default DashboardPage;
