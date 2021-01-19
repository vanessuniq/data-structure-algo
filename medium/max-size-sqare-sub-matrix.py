"""
    Product Defects || HackerRank

    A quality agent is responsible for inspecting samples of finished products in the production line.
    Each sample contains defective and non-defective products represented by 1 and 0 respectively. 
    After placing the product samples sequentially in a two-dimensional square matrix of the product samples, 
    determine the size of the largest square area of defective products.

    complete the function largestArea that take a two dimensional array of integers as an input and return an integer
    representing the size of the largest square sub-matrix of defective products (fill with 1 only)
 """

 def LargestArea(samples):
    #creating matrix T same size of samples filled with zeroes
    T = [[0 for x in range(len(samples[0]))] for y in range(len(samples))]
    max = 0
    #iterating over the rows of the matrix      
    for i in range(len(samples)):  
        #iterating over the columns of the matrix
        for j in range(len(samples[0])):
            #saving element from samples to T
            T[i][j] = samples[i][j]
            #if element is 1 and not at first row and column
            if i > 0 and j > 0 and samples[i][j] == 1:
                #largest square sub-matrix ending at samples[i][j] will be 1
                #plus min of large square sub-matrix which is ending at
                #samples[i][j-1] , samples[i-1][j] and samples[i-1][j-1]
                T[i][j] = min(T[i][j - 1], T[i - 1][j], T[i - 1][j - 1]) + 1
                #updating maximum size found
            if max < T[i][j]:
                max = T[i][j]

    #returning the result
    return max

 