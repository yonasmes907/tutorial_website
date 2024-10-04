export default function MathsTutorial() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Maths Tutorial</h2>
        <p>
          Welcome to the Maths tutorial! Here you can learn about various topics
          in maths such as:
        </p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>Algebra</li>
          <li>Geometry</li>
          <li>Calculus</li>
          <li>Statistics</li>
        </ul>
        <p>Click on the topics above to get started!</p>
      </div>
    </div>
  );
}
