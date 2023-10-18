
const FeaturesSection = () => {
  return (
    <section className="py-12 text-gray-700">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 p-4 transform transition-transform hover:scale-105">
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold">Code Collaboration</h2>
            <p className="mt-4">Collaborate seamlessly with your team on code projects. Review, comment, and share feedback in real-time, ensuring that your codebase evolves efficiently and error-free.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 transform transition-transform hover:scale-105">
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold">Automated Code Analysis</h2>
            <p className="mt-4">Take advantage of automated code analysis tools that help you identify potential issues and suggest improvements in your code. Ensure that your codebase adheres to the highest coding standards</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 transform transition-transform hover:scale-105">
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold">Code Review Insights</h2>
            <p className="mt-4">Gain valuable insights into your code review process. Track the progress, review efficiency, and code quality to make data-driven decisions and improve your development workflow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
